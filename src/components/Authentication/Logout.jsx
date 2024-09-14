import { useAuth } from "@/authContext/useAuth";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/home');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;