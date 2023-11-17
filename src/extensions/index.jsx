import { v4 as uuidv4 } from 'uuid'
import { Enter, Heading, HyperLink, KeyCode, Paragraph, Star, Strong } from '../components/fragments/Markdown'
export default function getExtensionPages() {
  const extensionPages = [
    {
      uuid: uuidv4(),
      name: 'cihuy-theme',
      displayName: 'Cihuy Theme',
      description: 'Cihuyy... Uhuyy.... XD, my own theme extension',
      publisher: 'Cihuy',
      version: '2.0.0',
      icon: '/img/extensions/cihuy_theme/circle_cute_cat_mobile_phone.png',
      author: {
        name: 'Rifaldi Arifin',
        email: 'adirifaldiarifin@gmail.com',
        url: 'https://rifaldiarifin.netlify.app'
      },
      repository: {
        type: 'git',
        url: 'https://github.com/rifaldiarifin/cihuy-theme.git'
      },
      categories: ['Themes'],
      contributes: {
        themes: [
          {
            label: 'Cihuy Code Light',
            uiTheme: 'cc-light'
          },
          {
            label: 'Cihuy Code Dark',
            uiTheme: 'cc-dark'
          }
        ]
      },
      readme: () => {
        return (
          <>
            <Heading val={'cihuy-theme README'} />
            <Enter />
            <Heading lvl={2} val={'Working with Markdown'} />
            <Enter />
            <Paragraph>
              You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:
            </Paragraph>
            <Enter />
            <Star
              val={
                <>
                  Split the editor (<KeyCode val="Cmd+&#92;" /> on macOS or <KeyCode val="Ctrl+&#92;" /> on Windows and
                  Linux).
                </>
              }
            />
            <Star
              val={
                <>
                  Toggle preview (<KeyCode val={'Shift+Cmd+V'} /> on macOS or <KeyCode val={'Shift+Ctrl+V'} /> on
                  Windows and Linux).
                </>
              }
            />
            <Star
              val={
                <>
                  Press <KeyCode val={'Ctrl+Space'} /> (Windows, Linux, macOS) to see a list of Markdown snippets.
                </>
              }
            />
            <Enter />
            <Heading lvl={2} val={'For more information'} />
            <Enter />
            <Star
              val={
                <HyperLink
                  val="Visual Studio Code's Markdown Support"
                  to={'http://code.visualstudio.com/docs/languages/markdown'}
                />
              }
            />
            <Star
              val={
                <HyperLink val="Markdown Syntax Reference" to={'https://help.github.com/articles/markdown-basics/'} />
              }
            />
            <Enter />
            <Strong val={'Enjoy!'} />
          </>
        )
      },
      changelog: () => {
        return (
          <>
            <Heading val={'Change Log'} />
            <Enter />
            <Paragraph>
              All notable changes to the &quot;cihuy-theme&quot; extension will be documented in this file.
            </Paragraph>
            <Enter />
            <Paragraph>
              Check <HyperLink to={'http://keepachangelog.com/'} val={'Keep a Changelog'} /> for recommendations on how
              to structure this file.
            </Paragraph>
            <Enter />
            <Heading lvl={2} val={'[Unreleased]'} />
            <Enter />
            <Star val={'Initial release'} />
          </>
        )
      }
    },
    {
      uuid: uuidv4(),
      name: '2077-theme',
      displayName: '2077 theme',
      publisher: 'Endormi',
      description: 'Cyberpunk 2077 inspired theme',
      version: '1.5.3',
      categories: ['Themes'],
      repository: {
        type: 'git',
        url: 'https://github.com/endormi/vscode-2077-theme'
      },
      icon: '/img/extensions/2077/icon.PNG',
      contributes: {
        themes: [
          {
            label: '2077',
            uiTheme: 'cc-dark'
          }
        ]
      },
      readme: () => {
        return (
          <>
            <Heading val={'2077 Theme'} />
            <Enter />
            <Paragraph moreClass={'text-center'}>
              <HyperLink to={'https://www.cyberpunk.net'} val={'Cyberpunk 2077'} /> inspired theme.
            </Paragraph>
            <Enter />
            <Heading val={'Installation'} lvl={2} />
            <Enter />
            1. Open <Strong val={'Extensions'} /> sidebar panel in VS Code. `View → Extensions`
            <Enter />
            2. Search for <KeyCode val={'2077 theme'} /> - find the one by <Strong val={'Endormi'} />.<Enter />
            3. Click <Strong val={'Install'} /> to install it.
            <Enter />
            4. Click <Strong val={'Reload'} /> to reload your editor
            <Enter />
            5. Code &gt; Preferences &gt; Color Theme &gt; <Strong val={'2077'} />
            <Enter />
            <Enter />
            <Star
              val={
                <HyperLink
                  to={'https://marketplace.visualstudio.com/items?itemName=Endormi.2077-theme'}
                  val={'Marketplace'}
                />
              }
            />
            <Star
              val={<HyperLink to={'https://open-vsx.org/extension/Endormi/2077-theme'} val={'Open VSX Registry'} />}
            />
            <Enter />
            <Heading val={'Credit'} lvl={2} />
            <Enter />
            <Enter />
            Inspired by <HyperLink val="samrap's" to="https://github.com/samrap" /> awesome{' '}
            <HyperLink val="outrun" to="https://github.com/samrap/outrun-theme-vscode" /> theme. I edited the theme
            quite significantly to follow the Cyberpunk 2077 color palette.
            <Enter />
            <Enter />
            If any issues occur or you have ideas for new improvements, please open up a new{' '}
            <HyperLink val="issue" to="https://github.com/endormi/vscode-2077-theme/issues" /> not a{' '}
            <HyperLink val="PR" to="https://github.com/endormi/vscode-2077-theme/issues/17" />.<Enter />
            <Enter />
            <HyperLink
              val={'Icon'}
              to={'https://www.freepik.com/free-vector/night-city-skyline-background_1276620.htm'}
            />{' '}
            used.
            <Enter />
            <Enter />
            <Strong val={'Enjoy'} />
          </>
        )
      },
      changelog: () => {
        return (
          <>
            <Heading val={'Change Log'} />
            <Enter />
            <Paragraph>
              All changes to the <Strong val={'"2077-theme"'} /> extension will be documented in this file.
            </Paragraph>
          </>
        )
      }
    }
  ]
  return new Promise((res) => {
    setTimeout(() => {
      res(extensionPages)
    }, 50)
  })
}
