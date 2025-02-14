"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function FloatingObjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const objectsRef = useRef<THREE.Mesh[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create floating objects
    const geometries = [
      new THREE.IcosahedronGeometry(0.5),
      new THREE.TorusGeometry(0.3, 0.1, 16, 100),
      new THREE.OctahedronGeometry(0.4),
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x7c40ff, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xff40a8, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0x40b5ff, shininess: 100 }),
    ]

    // Create and position objects
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = materials[Math.floor(Math.random() * materials.length)]
      const object = new THREE.Mesh(geometry, material)

      object.position.x = (Math.random() - 0.5) * 10
      object.position.y = (Math.random() - 0.5) * 10
      object.position.z = (Math.random() - 0.5) * 5

      scene.add(object)
      objectsRef.current.push(object)
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      objectsRef.current.forEach((object) => {
        object.rotation.x += 0.002
        object.rotation.y += 0.003
        object.position.x += mousePosition.x * 0.01
        object.position.y += mousePosition.y * 0.01
        object.position.x *= 0.99 // Damping effect
        object.position.y *= 0.99 // Damping effect
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = window.innerWidth
      const height = window.innerHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [
    mousePosition.x,
    mousePosition.y,
  ]), // Added mousePosition.x and mousePosition.y to dependencies
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1,
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10" />
}

