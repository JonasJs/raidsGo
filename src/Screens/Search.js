import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';

// Components
import Group from '../components/Group';

//Images
import IconSearch from '../components/Icons/IconSearch';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
const Title = styled.Text`
  font-size: 24px;
  color: #394064;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
  text-align: center;
`;

const Send = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  background: #fff;
`;
const Input = styled.TextInput`
  flex: 1;
  height: 70px;
  padding-left: 10%;
`;
const Icon = styled.TouchableOpacity`
  padding-right: 10%;
`;

const Text = styled.Text``;

const Search = () => {
  const {groups} = useSelector(state => state.group);
  const [groupsName, setGroupsName] = useState('');
  const [filter, setFilter] = useState([]);

  const SearchGroup = () => {
    const group = groups.filter(({title}) =>
      title.toUpperCase().includes(groupsName.toUpperCase()),
    );
    alert(JSON.stringify(group));
    setFilter(group);
  };

  useEffect(() => {
    setFilter(groups);
  }, [groups]);

  return (
    <Container>
      <Send
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}>
        <Input
          placeholder="Digite o nome do grupo"
          onChangeText={text => setGroupsName(text)}
          value={groupsName}></Input>
        <Icon onPress={() => SearchGroup()}>
          <IconSearch></IconSearch>
        </Icon>
      </Send>
      {filter.length > 0 ? (
        filter.map(({key, title, pokemon, numberUser}) => (
          <Group
            key={key}
            Title={title}
            Pokemon={pokemon}
            NumberUser={numberUser}></Group>
        ))
      ) : (
        <Text>dssdf</Text>
      )}
    </Container>
  );
};

Search.navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Search;
