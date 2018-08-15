import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  HomeButton() {
    Actions.replace('home');
  }
  RegisterButton() {
    Actions.push('register');
  }
  EmergencyButton() {
    Actions.push('emergency');
  }
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Image source={ require('../banner.jpg') } style={{ width: '100%', height: 170 }} />
          </View>
          <Form>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <Input value="resgate@animal.com.br" textAlign={ 'center' } />
            </Item>
            <Item stackedLabel last>
              <Label>Senha</Label>
              <Input secureTextEntry value="senha" textAlign={ 'center' } />
            </Item>
          </Form>
          <View style={{ marginTop: 20 }}>
            <Left />
            <Body>
              <Button primary bordered onPress={ this.HomeButton } style={{ backgroundColor: '#0173b2' }}>
                <Text style={{ color: 'white' }}>Entrar</Text>
              </Button>
            </Body>
            <Right />
          </View>
          <View style={{ marginTop: 5 }}>
            <Left />
            <Body>
              <Button hasText transparent onPress={ this.RegisterButton }>
                <Text>Ainda não tem acesso?</Text>
              </Button>
            </Body>
            <Right />
          </View>
          <View style={{ marginTop: 20 }}>
            <Left />
            <Body>
              <Button danger onPress={ this.EmergencyButton }>
                <Text style={{ color: 'white' }}>Emergência</Text>
              </Button>
            </Body>
            <Right />
          </View>
        </Content>
      </Container>
    );
  }
}