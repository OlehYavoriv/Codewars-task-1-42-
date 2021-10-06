const numberConstant = constant => {
    if (Number.isNaN(constant)) return 'Number.NaN'
    if (Number.isSafeInteger(constant)) return constant
  
    if (constant === Number.MAX_VALUE) return 'Number.MAX_VALUE'
    if (constant === Number.MIN_VALUE) return 'Number.MIN_VALUE'
    if (constant === Number.NEGATIVE_INFINITY) return 'Number.NEGATIVE_INFINITY'
    if (constant === Number.POSITIVE_INFINITY) return 'Number.POSITIVE_INFINITY'
  }
  
  const whatNumberIsIt = n => `Input number is ${numberConstant(n)}`