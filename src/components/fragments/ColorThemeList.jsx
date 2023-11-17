import { CiSearchPopup } from '../layouts/CihuyCodeLayout'

const ColorThemeList = ({ currentTheme, setTheme, closeAfterClick = () => {} }) => {
  const themes = {
    // light
    cihuyCodeLight: () => {
      setTheme('cihuy-code-light')
    },
    lightVisualStudio: () => {
      setTheme('light-visual-studio')
    },
    // dark
    cihuyCodeDark: () => {
      setTheme('cihuy-code-dark')
    },
    darkVisualStudio: () => {
      setTheme('dark-visual-studio')
    },
    darkMonokai: () => {
      setTheme('dark-monokai')
    },
    dark2077: () => {
      setTheme('dark-2077')
    }
  }
  return (
    <>
      <CiSearchPopup.Li
        isActive={currentTheme === 'cihuy-code-light'}
        name={'Cihuy Code Light'}
        rightIcon={'settings'}
        callback={themes.cihuyCodeLight}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
      <CiSearchPopup.Li
        isActive={currentTheme === 'light-visual-studio'}
        name={'Light (Visual Studio)'}
        rightIcon={'settings'}
        callback={themes.lightVisualStudio}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
      <CiSearchPopup.Separator />
      <CiSearchPopup.Li
        isActive={currentTheme === 'dark-2077'}
        name={'2077'}
        rightIcon={'settings'}
        callback={themes.dark2077}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
      <CiSearchPopup.Li
        isActive={currentTheme === 'cihuy-code-dark'}
        name={'Cihuy Code Dark'}
        rightIcon={'settings'}
        callback={themes.cihuyCodeDark}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
      <CiSearchPopup.Li
        isActive={currentTheme === 'dark-visual-studio'}
        name={'Dark (Visual Studio)'}
        rightIcon={'settings'}
        callback={themes.darkVisualStudio}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
      <CiSearchPopup.Li
        isActive={currentTheme === 'dark-monokai'}
        name={'Monokai'}
        rightIcon={'settings'}
        callback={themes.darkMonokai}
        disabledAutoActive
        closeAfterClick={closeAfterClick}
      />
    </>
  )
}

export default ColorThemeList
