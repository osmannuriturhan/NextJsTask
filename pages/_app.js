import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import UserList from "../components/UserList";
import Utils from "../utils/api";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <PostList />
        <UserList />
        <Utils />
      </main>
      <Footer />
    </div>
  );
}
