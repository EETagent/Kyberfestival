import 'package:html/parser.dart';
import 'package:html/dom.dart';
import 'dart:io';

extension DiacriticsAwareString on String {
  static const diacritics = 'ÁáÓóöÉÉéěëČčÍíÚŮÜúůüÑñŠšÝýŽž';
  static const nonDiacritics = 'AaOooEEeeeCčIiUUUuůuNnSsÝyZz';

  String get withoutDiacriticalMarks => splitMapJoin('',
      onNonMatch: (char) => char.isNotEmpty && diacritics.contains(char)
          ? nonDiacritics[diacritics.indexOf(char)]
          : char);
}

class Social {
  Social({this.website, this.twitter, this.facebook});
  String? website;
  String? twitter;
  String? facebook;
  // ignore: non_constant_identifier_names
  String TSObject() {
    var websiteTemp = website != null ? ' web: "$website",' : "";
    var twitterTemp = twitter != null ? ' twitter: "$twitter",' : "";
    var facebookTemp = facebook != null ? ' facebook: "$facebook",' : "";
    return "{${websiteTemp + twitterTemp + facebookTemp}}";
  }

  bool isEmpty() {
    return website == null && twitter == null && facebook == null;
  }
}

class Speaker {
  const Speaker(this.role, this.organization, this.description, this.image,
      this.imageAVIF, this.social, this.name);
  final String name;
  final String role;
  final String organization;
  final String description;
  final String image;
  final String imageAVIF;
  final Social social;
  // ignore: non_constant_identifier_names
  String TSObject() {
    return '{ name: "$name", role: "$role", organization: ORGANIZATIONS.${organization.withoutDiacriticalMarks}, description: "$description", image: speaker["$image"].default, imageAVIF: speakerAVIF["$imageAVIF"].default, ${social.isEmpty() ? "" : "social: ${social.TSObject()}"}},';
  }
}

void main() async {
  List<Speaker> speakers = [];

  String speakersInput = await File("speakers.html").readAsString();
  Document html = parse(speakersInput);
  List<Element> speakersElements = html.getElementsByClassName("speaker");

  for (Element speakerElement in speakersElements) {
    String image =
        speakerElement.getElementsByTagName("img").first.attributes["src"]!;

    String imageAVIF = speakerElement
        .getElementsByTagName("source")
        .first
        .attributes["srcset"]!;

    final List<String> nameAndOrganization = speakerElement
        .getElementsByTagName("h2")
        .first
        .text
        .split("-")
        .map((e) => e.trim())
        .toList();

    final String name = nameAndOrganization.first;

    final String organization =
        nameAndOrganization.last.replaceAll(" ", "").toUpperCase();

    final String role = speakerElement
        .getElementsByTagName("span")
        .first
        .text
        .replaceAll("\n", " ")
        .replaceAll(RegExp(' +'), ' ')
        .trim();

    final String description = speakerElement
        .getElementsByTagName("p")
        .first
        .text
        .replaceAll("\n", " ")
        .replaceAll(RegExp(' +'), ' ')
        .trim();

    Social social = Social();
    speakerElement.getElementsByTagName("a").forEach((element) {
      final String href = element.attributes["href"]!;
      if (element.classes.contains("fa-firefox-browser")) {
        social.website = href;
      } else if (element.classes.contains("fa-twitter")) {
        social.twitter = href;
      } else if (element.classes.contains("fa-facebook")) {
        social.facebook = href;
      }
    });

    image = image
        .replaceAll("../../", "../assets/")
        .replaceAll("images/", "images/speakers/");
    imageAVIF = imageAVIF
        .replaceAll("../../", "../assets/")
        .replaceAll("avif/", "avif/speakers/");

    speakers.add(Speaker(
        role, organization, description, image, imageAVIF, social, name));
  }

  for (var element in speakers) {
    print(element.TSObject() + "\n");
  }

  speakers
      .map((e) =>
          e.organization.withoutDiacriticalMarks +
          " = " +
          '"${e.organization}",')
      .toSet()
      .forEach((organization) {
    print(organization);
  });

  print("\nPočet lidí: ${speakers.length}");
}
