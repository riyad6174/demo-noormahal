import Axios from 'axios';

export const baseURL = 'http://localhost:4000/api/v1/frontend';
// const baseURL = 'https://api.noormahalpalace.com/api/v1/frontend';

//story page ====>>>>>

//amenities

export async function getAmenities() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/amenities`, header);
  return response;
}
//Homepage banner

export async function getBanner(position) {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(
    `${baseURL}/banners/?position=${position}`,
    header
  );
  return response;
}

//experience

export async function getExperience() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/experiences`, header);
  return response;
}

//rooms

export async function getRooms() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/rooms`, header);
  return response;
}

//news

export async function getNews() {
  console.log('api called');
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/news`, header);
  return response;
}

//====> stay page

//stay-rooms

export async function getStayRooms() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/stay`, header);
  console.log(baseURL);
  return response;
}
//room-facilities

export async function getRoomFacilities() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/common`, header);
  return response;
}

//====> meeting and conference
export async function getGuestReview() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/guest-review`, header);
  return response;
}

//=====>>  promotions
export async function getPromotions() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/promotion/all`, header);
  return response;
}

//===>>>>>>>>>spa

//spa wellness

export async function getWellness() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/wellness`, header);
  return response;
}
//spa faq

export async function getSpaFaq() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/spa-faq`, header);
  return response;
}

//spa faq

export async function getSpaRituals() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/spa-ritual`, header);
  return response;
}

//spa Menu

export async function getSpaMenu(side) {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/spa-menu?side=${side}`, header);
  return response;
}

//spa gallery

export async function getSpaGallery() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/spa-gallery/`, header);
  return response;
}

//press

export async function getPressByYear(year) {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/press?year=${year}`, header);
  return response;
}

//gallery

export async function getGallery() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/gallery`, header);
  return response;
}

//faq

export async function getFaq() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/faq`, header);
  return response;
}

//====> contact-us

export async function postContact(data) {
  console.log(data);
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.post(`${baseURL}/contact`, data, header);
  return response;
}

//===> blog

export async function getBlog() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/blogs`, header);
  return response;
}

// utils/API.js
// export async function getAllBlogSlugs() {
//   // Fetch all blog posts to get their slugs
//   const response = await Axios.get(`${baseURL}/blogs`, header);

//   return response;

//   // const blogs = await response.json();

//   // return blogs.map((blog) => blog.slug); // Adjust according to your API response structure
// }

//single blog

export async function getSingleBlog(slug) {
  console.log(slug, 'slug from api');
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/blog/${slug}`, header);
  return response;
}

//====> testimonial

export async function getTestimonial() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/testimonial`, header);
  return response;
}

//dining page == =>

export async function getDining() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/dining`, header);
  return response;
}

//===>>> wedding & event

export async function getEvent() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/event`, header);
  return response;
}

//Wedding Images

export async function getWeddingImages() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/weeding`, header);
  return response;
}
//Pre Wedding Images
export async function getPreWeddingImages() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/pre-weeding`, header);
  return response;
}

//booking

export async function postBook(data) {
  console.log(data);
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.post(`${baseURL}/contact`, data, header);
  return response;
}
//enquiry

export async function postEnquire(data) {
  console.log(data);
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.post(`${baseURL}/contact`, data, header);
  return response;
}

//===> meeting and conference

export async function getMeeting() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/meeting`, header);
  return response;
}

//===>>> experiences

export async function getExperiencesData() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/experience-page`, header);
  return response;
}

//get footer data

//NOTE: NM6820233040 = >customID

export async function getSettings() {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/setting/NM2020242361`, header);
  return response;
}

//seo

export async function getSeo(pageName) {
  const header = {
    header: 'Content-Type:application/json',
  };
  const response = await Axios.get(`${baseURL}/seo/${pageName}`, header);
  console.log(baseURL);
  return response;
}
