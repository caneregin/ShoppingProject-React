import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import {Table,Menu,Icon,Label} from 'semantic-ui-react'

export default function UserInfoMessages() {
    return (
        <div>
            <Header as="h1">Mesajlarım</Header>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Cevap Bekleyen</Table.HeaderCell>
        <Table.HeaderCell>Cevaplananlar</Table.HeaderCell>
        <Table.HeaderCell>Tüm mesajlar</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Tarih
        </Table.Cell>
        <Table.Cell>Konu Başlığı</Table.Cell>
        <Table.Cell>Durum</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='left'>
            <Menu.Item>
              <Button primary>YENİ MESAJ GÖNDER</Button>
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}
