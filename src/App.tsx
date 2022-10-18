import React, { ReactElement, ReactNode } from 'react';

import './App.css';

// Conventional props
const Heading = ({ title }: { title: string }) => {
  return (
    <h1>{title}</h1>
  )
}

const HeadingWithContent = ({ children }: { children: ReactNode }): ReactElement => {
  return <h1>{children}</h1>
}


//Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}

type ContainerProps = {
  children: ReactNode
} & typeof defaultContainerProps

const Container = ({
  heading, children
}: ContainerProps): ReactElement => {

  return (
    <>
      <h1>{heading}</h1>
      <h1>{children}</h1>
    </>
  )
}

Container.defaultProps = defaultContainerProps;


function App() {
  return (
    <div>
      <Heading title='Hi Guys' />
      <HeadingWithContent>Hi I am a contant component</HeadingWithContent>
      <Container>Foo</Container>
    </div>
  );
}

export default App;
