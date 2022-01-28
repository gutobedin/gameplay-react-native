import { theme } from '../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ // Usamos o StyleSheet.create como padrão para fazer nossa estilização
    
    container: { //Por padrao o react native pega flexbox
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundColor
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
});