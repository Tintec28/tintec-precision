// src/components/ui/Input.tsx
import React from 'react'

interface InputProps {
  label: string
  type?: 'text' | 'email' | 'tel'
  textarea?: boolean
  error?: boolean
  errorMessage?: string
  className?: string
  // Props comunes para input y textarea
  id?: string
  name?: string
  value?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  maxLength?: number
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  textarea = false,
  error = false,
  errorMessage,
  className = '',
  ...props
}) => {
  const inputClass = `mt-1 block w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tintec-blue ${
    error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-tintec-blue'
  }`

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea
          className={`${inputClass} resize-none`}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          {...props}
        />
      )}
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  )
}

export default Input