// Style
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.landing_page}>
      <div className={style.overlay}></div> {/* Add an overlay for text visibility */}
      <img
        className={style.background_image}
        src="https://images.unsplash.com/photo-1690876923836-9ecf213ebe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" // Replace with your image URL
        alt="Background"
      />
      <div className={style.content}>
        <h1>Welcome to Our Website</h1>
        <p>Explore and Discover Amazing Content</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
