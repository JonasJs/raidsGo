import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {listGroups} from '../actions/GroupsActions';

// Components
import ButtonCustom from '../components/ButtonCustom';
import Header from '../components/Header';
import Group from '../components/Group';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  background-color: #ffffff;
`;
const Text = styled.Text`
  font-size: 18px;
  color: #9294a5;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
  text-align: center;
  margin: 40px 0;
`;
const Image = styled.Image`
  margin: 0 auto;
`;

const Groups = styled.SafeAreaView`
  flex: 1;
`;

const Home = ({navigation}) => {
  const isGroup = true;
  const {groups} = useSelector(state => state.group);
  const Dispatch = useDispatch();

  // const [listGroups, setListGroups] = useState([
  //   {
  //     name: 'jonas',
  //   },
  //   {
  //     name: 'jonas2',
  //   },
  // ]);

  useEffect(() => {
    Dispatch(listGroups());
  }, []);

  return (
    <>
      {!isGroup ? (
        <Container>
          <Image source={require('../assets/images/mimikyu.png')} />
          <Text>Você não tem nem um grupo</Text>
          <ButtonCustom
            Title="Procurar grupo"
            onPress={() => navigation.navigate('Search')}
          />
        </Container>
      ) : (
        <Groups>
          {groups.map(({key, title, pokemon, numberUser}) => (
            <Group
              key={key}
              Title={title}
              Pokemon={pokemon}
              NumberUser={numberUser}></Group>
          ))}
          {/* <Group
            Title="Ginasio 1"
            onPress={() => navigation.navigate('Conversation')}></Group> */}
        </Groups>
      )}
    </>
  );
};

Home.navigationOptions = {
  header: <Header Title="Grupos"></Header>,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Home;
