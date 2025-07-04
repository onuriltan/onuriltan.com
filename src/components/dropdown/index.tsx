import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  selected: Option | null;
  onSelect: (option: Option) => void;
  placeholder?: string;
};

const Dropdown = ({ options, selected, onSelect, placeholder }: DropdownProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div onClick={() => setOpen(!open)} className={styles.wrapper}>
        {selected ? selected.label : placeholder || "Select..."}
      </div>
      <div className={`${styles.caret_wrapper} ${open ? styles.caret_wrapper_open : styles.caret_wrapper_closed}`}>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className={`${open ? styles.dropdown_open : styles.dropdown_closed}`} ref={dropdownRef}>
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              onSelect(option);
              setOpen(false);
            }}
            className={styles.option}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
