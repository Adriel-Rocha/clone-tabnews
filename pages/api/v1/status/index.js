function status(request, response) {
  response.status(200).json({ valor: "Tudo certo" });
}

export default status;
