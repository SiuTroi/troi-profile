import React from 'react';
import quizzapp from "../../assets/quizz-app.png"
import tphone from "../../assets/tphone.png"
import emailapp from "../../assets/email-app.png"
import shoppingcart from "../../assets/shopping-cart.png"

const projects = [
  {
    title: "Quizz App",
    image: quizzapp,
    url: "https://quiz-app-react-ten.vercel.app"
  },
  {
    title: "Email App",
    image: emailapp,
    url: "https://siutroi-email-app-react.vercel.app"
  },
  {
    title: "Shopping Cart",
    image: shoppingcart,
    url: "https://shoping-cart-virid.vercel.app"
  },
  {
    title: "Tphone",
    image: tphone,
    url: "https://tphone-9a576.web.app"
  }
]

const Projects = () => {
  return (
    <div className='content'>
      <div className='flex flex-col lg:flex-row flex-wrap gap-3'>
        {projects.map((item, index) => (
          <div key={index} className="lg:min-w-[46%] lg:max-w-[48%]">
            <h1 className='font-extrabold mb-3 text-xl'>{index + 1}. {item.title}</h1>
            <img src={item.image} alt={item.title} className="rounded-lg" />
            <p  className="mt-3">Link chi tiết: <a href={item.url} className="text-blue-500">{item.url}</a></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects