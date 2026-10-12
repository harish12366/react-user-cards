const UserCard = (props) => {
    const { name, email, btnContent } = props;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>{email}</p>
            <button>{btnContent}</button>
        </div>
    );
};

export default UserCard;