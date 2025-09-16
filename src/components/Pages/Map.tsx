import React from 'react'

export const Map = () => {
  return (
    <section id="map">
          <div className="w-full px-4 sm:px-8 lg:px-16 mt-24">
            <iframe
                title="SRM Kattankulathur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.177316993803!2d80.04184267492107!3d12.82327668749045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7197cde89ef%3A0xb35e1825aeb12a76!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1693069329495!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl shadow-lg"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
    </section>
  )
}
