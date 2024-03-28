import MemorySlider from '@/components/organisms/MemoriesSlider'
import React from 'react'

function Memories() {
  return (
    <section className="memories_wrapper">
    <div className="header_area mx-auto">
      <h2 className="luxurious_title">
        PRE-WEDDING SHOOT FOR UNFORGETTABLE MEMORIES
      </h2>
      <p>
        The alluring interiors and remarkable amenities surrounding the
        hotel provide an awe-inspiring background for couples who are
        looking for a memorable pre-wedding shoot near New Delhi. Our
        expert team is renowned for planning and executing the shoots
        impeccably in one of the finest pre-wedding venues near Chandigarh
        which leads to flawless results.
      </p>
    </div>

    <MemorySlider />
  </section>
  )
}

export default Memories