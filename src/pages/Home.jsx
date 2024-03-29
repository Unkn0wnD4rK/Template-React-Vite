import "@/css/index.css";
import MetaTitleChanger from "@/components/MetaTitleChanger";

function Home() {
  return (
    <div className="fade-in h-screen">
      <div className="min-h-full bg-base-300 p-4 lg:p-10">
        <MetaTitleChanger newTitle="Home | X-2024-C3932-X1.0.0" />
      </div>
    </div>
  );
}

export default Home;