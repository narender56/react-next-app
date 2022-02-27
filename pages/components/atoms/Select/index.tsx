import styles from './Select.module.css'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import useClickOutside from '../../../plugins/useClickoutSide'

export type Option = {
  value: any,
  label: string
}

export type SelectProps = {
  placeholder: string,
  value: string | number,
  options: Option[],
  onChange: (newValue: string) => void;
  classes?: string
}

const Select = ({ placeholder, value, options, onChange, classes }: SelectProps) => {
  const [toggle, setToggle] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    onChange(option.value)
    setToggle(false)
  }

  const handlePlaceholderClick = () => {
    if (!options.length) return
    setToggle(!toggle)
  }

  useClickOutside(containerRef, toggle, handlePlaceholderClick)


  return (
    <div className={classNames(styles.select, classes)} ref={containerRef}>
      <div className={classNames(styles.placeholder, toggle)} onClick={handlePlaceholderClick}>{value || placeholder}</div>
      {
        toggle && !!options.length && (
          <div className={styles.dropdown}>
            {
              options.map(option => (
                <div
                  key={option.label}
                  className={classNames(styles.option, value === option.value ? 'styles.selected': '')}
                  onClick={() => handleOptionClick(option)}
                >
                  {
                    option.label
                  }
              </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Select
