'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {

  const { data } = useSession()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="bg-blue-100 min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Welcome to the QCM App!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Simplify your multiple-choice questionnaires and exams with our
          powerful QCM web app.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Use QCM App?
            </h2>
            <p className="text-gray-600">
              • Create, manage, and grade multiple-choice questionnaires
              effortlessly.
              <br />
              • Save time and resources with our user-friendly interface.
              <br />
              • Analyze results with detailed statistics and insights.
              <br />
              • Enhance the learning experience for your students or audience.
            </p>
          </div>
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get Started Today!
            </h2>
            <p className="text-gray-600">
              Ready to streamline your assessment process? Sign up now and
              experience the benefits of the QCM App.
            </p>
            <Link href="/signup" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
