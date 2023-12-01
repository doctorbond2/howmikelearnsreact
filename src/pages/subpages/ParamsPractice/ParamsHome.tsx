import React, { useEffect } from "react";
import { Todo } from "../../../types/TodoTypes";
import { Link } from "react-router-dom";

type Props = {
  data: Todo[];
};

const ParamsHome: React.FC<Props> = ({ data }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div>
        {data.map(
          (x, i) =>
            data && (
              <>
                <Link to={`todo/${i + 1}`} state={x}>
                  {x?.title}
                </Link>
                <br />
              </>
            )
        )}
      </div>
    </>
  );
};

export default ParamsHome;
