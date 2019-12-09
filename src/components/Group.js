import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import CountDown from 'react-native-countdown-component';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background: #fff;
  padding: 0 10%;
  margin-top: 16px;
`;
const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0;
`;

const Content = styled.View`
  margin-left: 16px;
`;

const TitleGroup = styled.Text`
  color: #3d3e4f;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
`;
const Icon = styled.Image`
  width: 14px;
  height: 14px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  margin-right: 32px;
`;
const IconContent = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-right: 6px;
`;

const IconText = styled.Text`
  color: #9294a5;
  font-size: 12px;
  font-family: 'Lato-Bold';
  margin-left: 6px;
`;

const Line = styled.View`
  height: 1px;
  background: #eeeeee;
  margin: 16px 0;
`;

const Group = ({
  Title,
  Pokemon = '??',
  NumberUser = 0,
  time = 1010,
  onPress,
}) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    //Dispatch(listMyGroups(uid));
    // const myInterval = setInterval(() => {
    //   if (count > 0) {
    //     setCount(count - 1);
    //   }
    //   if (count === 0) {
    //     clearInterval(myInterval);
    //   }
    // }, 2000);
  }, [count]);

  return (
    <>
      <Container onPress={onPress}>
        <Image source={require('../assets/images/group.png')} />
        <Content>
          <TitleGroup>{Title}</TitleGroup>
          <IconContent>
            <IconContainer>
              <Icon source={require('../assets/images/iconClock.png')} />
              <CountDown
                until={time}
                onFinish={() => alert('finished')}
                onPress={() => alert('hello')}
                digitStyle={{
                  backgroundColor: '#FFF',
                  height: 10,
                }}
                digitTxtStyle={{
                  color: '#9294a5',
                  fontSize: 12,
                  fontFamily: 'Lato-Bold',
                  marginLeft: 0,
                }}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                size={7}
              />
            </IconContainer>
            <IconContainer>
              <Icon source={require('../assets/images/iconPokemon.png')} />
              <IconText>{Pokemon}</IconText>
            </IconContainer>
            <IconContainer>
              <Icon source={require('../assets/images/numberUsers.png')} />
              <IconText>{NumberUser}</IconText>
            </IconContainer>
          </IconContent>
        </Content>
      </Container>
      <Line />
    </>
  );
};

export default Group;
