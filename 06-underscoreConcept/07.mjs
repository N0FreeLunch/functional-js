function func2 (data) {
  for (var i = 0, len = data.length; i < len; i++) {}
}

func2(undefined);

function func2(data) {
  for (var i = 0, len = getLength(data); i < len; i++) {}
}
func2(undefined);

function getLength(list) {
  return list == null ? undefined : list.length;
}
