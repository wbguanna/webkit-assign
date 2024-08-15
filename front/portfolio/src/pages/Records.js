import Photo from '../Photo';

export default ({ recordArr }) => {
  return (
    <div>
      <div className="w3-content">
        <h1>Phto List</h1>
        {recordArr.map(function (item, idx) {
          return <Photo key={item.no} item={item} />;
        })}
      </div>
    </div>
  );
};
