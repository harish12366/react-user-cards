import UserCard from './components/Usercard';
import './App.css';

const App = () => {
    return (
        <div className="user-container">
            <UserCard
                name="harish"
                email="raga@gmail.com"
                btnContent="Btn1"
            />

            <UserCard
                name="bala"
                email="bala@gmail.com"
                btnContent="Btn2"
            />

            <UserCard
                name="ravi"
                email="ravi@gmail.com"
                btnContent="Btn3"
            />
        </div>
    );
};

export default App;