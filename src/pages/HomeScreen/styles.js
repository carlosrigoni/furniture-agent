import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#F0F0F5'
      },
    
      header: {
        position: "absolute",
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3870FF',
        padding: 10,
      },

      logo: {
          color: '#fff',
          fontWeight: "bold",
          fontSize: 28,
      },

      title: {
          fontSize: 30,
          fontWeight: "bold",
      },

      description: {
          fontSize: 14,
          color: "#737380",
      },

      projectsList: {
        marginTop: 32,
      },

      projects: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 18,
      },

      date: {
        fontSize: 12,
        color: "#737380",
        textAlign: "right",
        margin: -4,
      },

      projectProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
      },

      projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      projectValue: {
        marginTop: 4,
        fontSize: 15,
        marginBottom: 13,
        color: '#737380'
      },

      projectButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      projectButtonText: {
        color: '#3870FF',
        fontSize: 15,
        fontWeight: 'bold'
      }
});