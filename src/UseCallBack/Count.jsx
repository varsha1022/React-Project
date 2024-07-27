import React from "react";

const Count = (props) => {
  const { count, text } = props;
  console.log('rendered from -', {text});
  return (
    <div>
      <h3 className="text-xl font-semibold">
        {text} : {count}
      </h3>
    </div>
  );
};

// export default Count;
export default React.memo(Count);
