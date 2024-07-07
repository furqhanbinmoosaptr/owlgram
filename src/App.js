import React from 'react'
import Login from './Views/PostLogins/PreLogins/Login'

import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SplitPanel,
  TopNavigation,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import TopNavigations from './Components/TopNavigations';

const App = () => {
  return (
    <>    
    <TopNavigations/>
    <AppLayout
    headerSelector='header'
    breadcrumbs={
      <BreadcrumbGroup
        items={[
          { text: 'Home', href: '#' },
          { text: 'Service', href: '#' },
        ]}
      />
    }
    navigation={
      <SideNavigation
        header={{
          href: '#',
          text: 'Service name',
        }}
        items={[{ type: 'link', text: `Page #1`, href: `#` }]}
      />
    }
  
    content={
      <ContentLayout
        header={
          <Header variant="h1" info={<Link variant="info">Info</Link>}>
            Page header
          </Header>
        }
      >
        <Container
          header={
            <Header variant="h2" description="Container description">
              Container header
            </Header>
          }
        >
          <div className="contentPlaceholder" />
        </Container>
      </ContentLayout>
    }
  />
  </>

  )
}

export default App