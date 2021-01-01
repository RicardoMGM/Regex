
# Não é suportado pelo JavaScript por isso foi feito em Hugby
# Look behind
texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i)
