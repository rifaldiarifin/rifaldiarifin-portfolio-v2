import { v4 as uuidv4 } from 'uuid'
import { Enter, Heading, HyperLink, KeyCode, Paragraph, Star, Strong } from '../components/fragments/Markdown'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function getExtensionPages() {
  const extensionPages = [
    {
      uuid: uuidv4(),
      name: 'cihuy-theme',
      displayName: 'Cihuy Theme',
      description: 'Cihuyy... Uhuyy.... XD, my own theme extension',
      publisher: 'Cihuy',
      version: '2.0.0',
      icon: '/img/extensions/cihuy_theme/icon.png',
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
            <div className="box text-center">
              <LazyLoadImage
                src='/img/extensions/cihuy_theme/icon.png'
                effect='opacity'
                alt='React Code Render'
                style={{ width: '110px' }}
              />
            </div>
            <Enter />
            <Heading moreClass={'text-center'} val={'Cihuy Theme'} lvl={1} />
            <Enter />
            <Paragraph moreClass={'text-center'}>
              Extension of the Cihuy Code Theme, depiciting a happy, and fresh theme
            </Paragraph>
            <Enter />
            <Strong val={`That's it`} />
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
          </>
        )
      }
    },
    {
      uuid: uuidv4(),
      name: 'react-code-render',
      displayName: 'React Code Render',
      description: 'Extension that allows you to render react component code directly in a text editor.',
      publisher: 'Cihuy',
      version: '1.0.0',
      icon: '/img/extensions/react_code_render/icon.png',
      author: {
        name: 'Rifaldi Arifin',
        email: 'adirifaldiarifin@gmail.com',
        url: 'https://rifaldiarifin.netlify.app'
      },
      categories: ['Other'],
      contributes: {},
      readme: () => {
        return (
          <>
            <div className="box text-center">
              <LazyLoadImage
                src='/img/extensions/react_code_render/icon.png'
                effect='opacity'
                alt='React Code Render'
                style={{ width: '110px' }}
              />
            </div>
            <Enter />
            <Heading moreClass={'text-center'} val={'React Code Render'} lvl={1} />
            <Enter />
            <Paragraph>
              An easy way to render react components directly in the code editor.
            </Paragraph>
            <Enter />
            <Paragraph>
              With this extension, it allows you to render the component code directly and it will be displayed below the written code.
            </Paragraph>
            <Enter />
            <div className="box dsp-grid">
              <LazyLoadImage
                src='/img/extensions/react_code_render/preview.gif'
                alt='React Code Render Preview'
                effect='opacity'
                style={{ width: '100%', height: 'calc(100% - 18%)', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <Strong val={`That's it.`} />
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
      icon: '/img/extensions/2077/icon.png',
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
            <Heading val={'Preview Image'} moreClass={'text-center'} lvl={2} />
            <Enter />
            <div className="box dsp-grid">
              <LazyLoadImage
                src='/img/extensions/2077/preview.png'
                alt='2077'
                effect='opacity'
                style={{ width: '100%' }}
              />
            </div>
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
