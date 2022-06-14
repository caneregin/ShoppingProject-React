import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

export default function SignedOut(props) {
  let history = useHistory();

  const logMethod = () => {
    history.push("/auth")
  }
  const regMethod = () => {
    history.push("/authReg")
  }
  return (
    <div>
      <Menu.Item>
          <Button onClick={logMethod} primary>Giriş yap</Button>
            <Button onClick={regMethod} style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
      </Menu.Item>

    </div>
  )
}
