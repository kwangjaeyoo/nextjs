import { HTMLInputTypeAttribute } from 'react'

interface InputBoxProp {
  value?: string
  placeholder?: string
  disable?: boolean
  type?: HTMLInputTypeAttribute
  onChange?: (value: string) => void
}

const InputBox: React.FC<InputBoxProp> = ({
  value = '',
  placeholder = '',
  disable,
  type = 'string',
  onChange,
}) => {
  return (
    <input
      className={`
        flex
        border
        w-full
        border-[#dbdbdb]
        h-12
        rounded 
        items-center 
        pl-3
        pr-3
        focus:outline-none
        focus:ring-[#7340BF]
        focus:border-[#7340BF]
        focus:border-2
        disabled:text-[#939393]
        disabled:bg-white
        text-[#0D1E20]
      `}
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disable}
      onChange={(value) => {
        if (onChange) {
          onChange(value.target.value)
        }
      }}
    />
  )
}

export default InputBox
