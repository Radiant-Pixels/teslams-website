import React from 'react'

export const Map = () => {
  return (
    <section id="map">
      <div className="w-full px-4 sm:px-8 lg:px-16 mt-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3885.2359889013255!2d80.058982!3d13.147509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52886150f14561%3A0xc3976dba8f6f7588!2sAalim%20Muhammed%20Salegh%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1758032674261!5m2!1sen!2sin"
          className="top-0 left-0 w-full h-[480px] border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
    </section>
  )
}
