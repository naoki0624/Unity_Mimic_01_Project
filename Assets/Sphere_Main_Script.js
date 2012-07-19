
function Update () {

	if (Input.GetKey(KeyCode.UpArrow))
		transform.Translate(0, 0.1, 0);

	if (Input.GetKey(KeyCode.DownArrow))
		transform.Translate(0, -0.1, 0);

	if (Input.GetKey(KeyCode.RightArrow))
		transform.Translate(0.1, 0, 0);

	if (Input.GetKey(KeyCode.LeftArrow))
		transform.Translate(-0.1, 0, 0);
}