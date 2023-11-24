import Basic from "../components/ATM/Basic";
import { MouseEvent } from "react";
import { URLOptions } from "../types/MainTypes";

import { useNavigate } from "react-router-dom";
import { Button, FormSelect, Image, Dropdown } from "react-bootstrap";
type Props = {};

const NavigationBar = (props: Props) => {
  const navigate = useNavigate();
  const options: URLOptions[] = [
    { value: "", label: "Home" },
    { value: "TillFredag", label: "ATM" },
    { value: "TodoListTest", label: "Todolist" },
    { value: "TodoTwo", label: "TodoTwo" },
    { value: "FetchAPIB", label: "FetchAPIB" },
    { value: "P1Pokemon", label: "P1Pokemon" },
  ];
  const navigateValue = (value: string) => {
    navigate(`/${value}`);
  };
  return (
    <>
      <header className="navsi">
        <Button
          style={{ marginLeft: "4%" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Image
            className="eldenpic"
            roundedCircle
            src="ER_golden_order.webp"
          />
        </Button>

        <div className="navbar-input-select-group">
          {/* <FormSelect onChange={handleChange}>
      {options.map((x, index) => (
        <option key={`s-${index}`} value={x.value}>
          {x.label}
        </option>
      ))}
    </FormSelect> */}
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Uppgifter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {options.map((x, index) => (
              <Dropdown.Item
                key={`s-${index}`}
                onClick={() => {
                  navigateValue(x.value);
                }}
              >
                {x.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </header>
    </>
  );
};

export default NavigationBar;
