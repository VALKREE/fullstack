import React,{useState} from 'react';
import Navigation from "../../components/admin/navigation/navigation";

const Admin = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    function addNewGood(e) {
        e.preventDefault();
        console.log(title, description);
    }
    return (
        <div>
            <Navigation/>
        </div>
    );
};

export default Admin;