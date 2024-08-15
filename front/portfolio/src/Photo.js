const Photo = ({ item }) => {
  return (
    <div className="w3-row w3-margin">
      <div className="w3-third">
        <img
          src={item.img}
          style={{ width: '100%', minHeight: '200px' }}
          alt="글자로 대신합니다"
        />
      </div>
      <div className="w3-twothird w3-container">
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Photo;
