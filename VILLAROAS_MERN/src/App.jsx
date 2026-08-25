import StudentCard from "./components/studentcard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <StudentCard
        name="Albert Villarosa"
        age={19}
        studentNum="202405700"
        course="BSIT"
        section="3-3"
      />
    </div>
  );
}

export default App;