import React, { useMemo } from 'react'
import createTheme from 'utils/createCustomTheme'
import { ThemeProvider } from 'react-neu'

import { BalancesProvider } from 'contexts/Balances'
import { WalletProvider } from 'contexts/Wallet'
import { TransactionWatcherProvider } from 'contexts/TransactionWatcher'

const Providers: React.FC = ({ children }) => {
  const { dark: darkTheme, light: lightTheme } = useMemo(() => {
    return createTheme()
  }, [])

  return (
    <ThemeProvider darkTheme={darkTheme} lightTheme={lightTheme}>
      <WalletProvider>
        <BalancesProvider>
          <TransactionWatcherProvider>{children}</TransactionWatcherProvider>
        </BalancesProvider>
      </WalletProvider>
    </ThemeProvider>
  )
}

export default Providers
