import React from "react";
import styles from "./index.module.scss";

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

  React.useEffect(() => {
    if (open && dropdownRef.current) {
      dropdownRef.current.scrollTop = 0; // Reset scroll position when dropdown opens
    }
    if (!open && dropdownRef.current) {
      setTimeout(() => {
        dropdownRef.current?.classList.remove(styles.dropdown_border);
      }, 200); // Delay to allow dropdown to close before removing class
    }
  }, [open]);

  return (
    <div ref={ref} className={styles.container}>
      <div onClick={() => setOpen(!open)} className={styles.wrapper}>
        {selected ? selected.label : placeholder || "Select..."}
      </div>
      <div className={`${styles.caret_wrapper} ${open ? styles.caret_wrapper_open : styles.caret_wrapper_closed}`}>
        <i className={`fa-solid fa-caret-down`} />
      </div>
      <div
        className={`${styles.dropdown_border} ${open ? styles.dropdown_open : styles.dropdown_closed}`}
        ref={dropdownRef}
      >
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
