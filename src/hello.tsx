//import * as React from 'react'
import React, {useState} from 'react'

type Props = {
  name: string
  onChange: (value: string) => void
}

export default function Hello(props: Props) {

  const [name, setName] = useState(props.name)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setName(value);
    props.onChange(value);
  }

  return <div>
    <div>Hello, {name}</div>
    <input type='text' value={name} onChange={onChange} data-testid='name-input'/>
  </div>
};

