import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'

const SignUp = (): JSX.Element => {
 return (
  <View style={styles.container}>
    <Header />
    <View style={styles.inner}>
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} value='Email address'></TextInput>
      <TextInput style={styles.input} value='password'></TextInput>
      <Button label='Submit' />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already registered?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Log in.</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#f0f4f8'
 },
 inner: {
  paddingVertical: 24,
  paddingHorizontal: 27
 },
 title: {
  fontSize: 24,
  lineHeight: 32,
  fontWeight: 'bold',
  marginBottom: 24
 },
 input: {
  borderWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#fff',
  height: 48,
  padding: 8,
  fontSize: 16,
  marginBottom: 16
 },
 footer: {
  flexDirection: 'row'
 },
 footerText: {
  fontSize: 14,
  lineHeight: 24,
  marginRight: 8,
  color: '#000'
 },
 footerLink: {
  fontSize: 14,
  lineHeight: 24,
  color: '#467fd3'
 }
})

export default SignUp