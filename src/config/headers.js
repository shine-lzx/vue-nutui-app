const headers = () => {
  const env = process.env.NODE_ENV
  if (env === 'development') {
    return {
      token: 'shine',
    }
  } else {
    return {
      token: 'product',
    }
  }
}

export default headers
