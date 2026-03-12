import Navbar from "./components/navigation/navbar";

function App() {
  return (
    <div className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'>
      <Navbar />
      <main className=''></main>
    </div>
  );
}

export default App;
