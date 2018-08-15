import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Emergency extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered style={{ flexDirection: "row", justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'red' }}>ATENÇÃO !!!</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ textAlign: 'center' }}>
                  Para evitar o mal uso da funcionalidade, o envio da foto é OBRIGATÓRIO.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 5 }}>
            <Button style={{ backgroundColor: '#85d5dc' }}>
              <Icon style={{ color: '#0173b2' }} name="camera" />
              <Text style={{ color: '#0173b2' }}>Foto*</Text>
            </Button>
            <Button style={{ backgroundColor: '#85d5dc' }}>
              <Text style={{ color: '#0173b2' }}>Áudio</Text>
              <Icon style={{ color: '#0173b2' }} name="mic" />
            </Button>
          </View>
          <Form style={{ marginTop: 5 }}>
            <Item stackedLabel>
              <Label>Conte-nos o que aconteceu.</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Alguma outra informação pertinente?</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Localização: <Text style={{ fontSize: 8 }}>(ALTERAR)</Text>
              </Label>
              <Input value="R. Gen. Carneiro, 1031, Curitiba-PR/BR" />
            </Item>
          </Form>
          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 10 }}>
            <Button primary bordered style={{ backgroundColor: '#0173b2' }}>
              <Icon style={{ color: 'white' }} name="radio" />
              <Text style={{ textAlign: 'center', color: 'white' }}>
                Solicitar Ajuda
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}