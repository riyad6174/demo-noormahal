import React from 'react'

function SpecialService() {
  return (
    <div>
              <section
          className="special_wrapper"
          style={{
            backgroundImage: `url('assets/images/event/special_wedding_bg.png')`,
          }}
        >
          <div className="special_grid">
            <div className="special_item" data-aos="fade-up">
              <h4 className="heading_title2 text-center">CATERING</h4>
              <p>
                You can count on our seasoned team of culinary experts to
                delight your guests with remarkable delicacies. Choose from our
                impressive repertoire of food options inspired from both Indian
                states and various global cuisines. We also have live cooking
                counters that serve lip smacking dishes and exhibit the skills
                of our chefs. In addition to this, our pastry chefs can create
                customized cakes and pastries while our sommelier can render
                expert advice on drinks to complement your menu.
              </p>
              <div className="text-center">
                <button
                  className="book_table_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span>Enquire Now </span>
                </button>
              </div>
            </div>
            <div className="middle_area">
              <h4 className="special_title text-center">
                OUR <br />
                SPECIAL SERVICES
              </h4>
            </div>
            <div
              className="special_item d-flex flex-column justify-content-between"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h4 className="heading_title2 text-center">WEDDING PLANNING</h4>
              <p>
                From flowers to food, stationery, photographer and everything in
                between, our dedicated wedding coordinators will ensure that
                your plans run smoothly. Leave all your worries and enjoy your D
                Day flawlessly!
              </p>
              <div className="text-center">
                <button
                  className="book_table_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span>Enquire Now </span>
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SpecialService