import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to the World',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Welcome to the World'),
        ),
        body: const Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
