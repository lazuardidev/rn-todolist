import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    backgroundColor: '#f2f2f2',
    height: '100%',
  },
  noDataContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  textNoData: {
    fontSize: 16,
    fontWeight: '500',
  },
});
